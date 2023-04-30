
import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, Stack, TextField, Tooltip } from '@mui/material';
import { CountryType } from './Location';
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { Configuration, OpenAIApi } from 'openai';
import IosShareIcon from '@mui/icons-material/IosShare';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

import env from './config.json'

interface GeocodeResult {
  center: [number, number];
}

interface PromptProps {
  duration: number
  location: CountryType
  activities: string[]
}

const configuration = new Configuration({
  organization: env.OPENAI_ORGANISATION,
  apiKey: env.OPENAI_APIKEY
});

const openai = new OpenAIApi(configuration);

const COPIED_TIMEOUT = 500;

export default function Prompt({ duration, location, activities }: PromptProps) {
  const prompt = duration && location && activities.length > 0 ? "Duration: " + duration + " days, Location: " + location?.name + ", Activities: " + activities.join(',') + ". Based on this information, can you help me plan a " + duration + "-day trip to " + location?.name + " focused on these activities? Provide a day by day iternary with timings for each activity." : undefined

  const [marker, setMarker] = useState<number[]>([]);

  const getCoordinates = useCallback(async (text: string) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          text
        )}.json?access_token=${env.MAPBOX_APIKEY}&limit=1`
      );
      const data = await response.json();
      if (data.features.length > 0) {
        const result: GeocodeResult = data.features[0];
        return {
          latitude: result.center[1],
          longitude: result.center[0],
        };
      } else {
        throw new Error("No results found");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }, [])

  useEffect(() => {
    const fetchLocation = async () => {
      const coordinates = await getCoordinates(location?.name!);
      if (coordinates) {
        setMarker([coordinates.longitude, coordinates.latitude]);
      }
    };

    if (marker.length !== 2) {
      fetchLocation();
    }
  }, [getCoordinates, location?.name, marker]);

  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = env.MAPBOX_APIKEY;

    if (marker.length !== 2) {
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: new mapboxgl.LngLat(marker[0], marker[1]),
      zoom: 16,
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    map.on('load', () => {
      const mark = new mapboxgl.Marker({
        color: "#FF0000", // sets the marker color to red
        draggable: false,
      })
        .setLngLat([marker[0], marker[1]]) // set marker position to the same as the map center
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [marker]);


  const [response, setResponse] = useState<string>('');
  const [locations, setLocations] = useState<string>('')

  const generateResponse = useCallback(async (input: string) => {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      max_tokens: 64
    });

    return completion.data.choices[0].text;
  }, [])

  const generatePrompt = useCallback(async () => {
    const res = await generateResponse(prompt!);
    const loc = await generateResponse("Return an array of strings of locations from the following string: " + res + ". It should be in the format of location1, location2, location3");
    // const res = prompt;
    // const loc = "China, Sweden, Japan, Korea, New York";
    setResponse(res || '');
    setLocations(loc || '');
  }, [generateResponse, prompt]);

  useEffect(() => {
    const updatePrompt = async () => {
      generatePrompt()
    };

    if (!response && !locations) {
      updatePrompt();
    }
  }, [generatePrompt, locations, response]);

  const handleMarkerChange = useCallback(async (newLoc: string) => {
    const coordinates = await getCoordinates(newLoc);
    if (coordinates) {
      setMarker([coordinates.longitude, coordinates.latitude]);
    }
  }, [getCoordinates])

  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const [copied, setCopied] = useState<boolean>(true)

  const copyClipboard = useCallback(() => {
    navigator.clipboard.writeText(response)
    setTimeout(() => {
      setCopied(true)
    }, COPIED_TIMEOUT)
    setCopied(false)
  }, [response])

  const [emailAddress, setEmailAddress] = useState<string>('')

  const gmailUrl =
    'https://mail.google.com/mail/?view=cm&fs=1&to=' +
    emailAddress +
    '&su=TravelGPT Itinerary&body=' +
    response

  return (
    <>
      <Dialog open={dialogOpen} onClose={() => { setDialogOpen(false) }}>
        <DialogTitle>
          Share Itinerary
          {copied ? (
            <Tooltip title="Copy to Clipboard">
              <IconButton onClick={copyClipboard} sx={{ ml: 1 }}>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Copied!">
              <IconButton onClick={copyClipboard}>
                <CheckIcon sx={{ color: 'green', fontSize: '90%', ml: 1 }} />
              </IconButton>
            </Tooltip>
          )}
        </DialogTitle>
        <DialogContent>
          <TextField value={emailAddress} onChange={(e) => { setEmailAddress(e.target.value) }}
            placeholder="Email Address" />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => { setDialogOpen(false) }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={() => {
            window.open(gmailUrl, '_blank')
          }}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <Stack direction="row" width="100%">
          {prompt && (
            <Stack direction="column" sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh"
            }}>
              <TextField
                value={response}
                placeholder="ChatGPT response"
                sx={{ width: '80%' }}
                multiline
                variant={"standard"}
                InputProps={{
                  disableUnderline: true
                }}
              />
              <IconButton onClick={(() => { setDialogOpen(true) })} sx={{ marginLeft: "auto", pr: 1, pb: 1 }}>
                <IosShareIcon />
              </IconButton>

              <Divider flexItem sx={{ border: 1, mt: 1, mb: 1, ml: 1 }} />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: '100%'
                }}
              >
                <Grid container>
                  {locations.split(',').map((item) => (
                    <Grid item xs={6} sm={4} md={3} key={item} sx={{ p: 3 }}>
                      <Button fullWidth onClick={() => handleMarkerChange(location.name + " " + item)}>
                        {item}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>)}

          <Divider orientation="vertical" flexItem sx={{ border: 1, ml: 1 }} />

          <div ref={mapContainerRef} style={{ height: '100vh', width: '100%' }} />;
        </Stack >
      </Box >
    </>
  );
}
