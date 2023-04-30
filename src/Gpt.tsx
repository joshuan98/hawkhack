import env from './config.json'
import React, { useCallback, useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { Box, TextField } from '@mui/material';
import Map from './Map'

const configuration = new Configuration({
  organization: env.OPENAI_ORGANISATION,
  apiKey: env.OPENAI_APIKEY
});

const openai = new OpenAIApi(configuration);

interface GptProps {
  prompt: string
}

export default function Activities({ prompt }: GptProps) {
  const [response, setResponse] = useState('');

  const generateResponse = useCallback(async (input: string) => {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      max_tokens: 64
    });

    return completion.data.choices[0].text;
  }, [])

  const handleClick = useCallback(async () => {
    const res = await generateResponse(prompt);
    setResponse(res || '');
  }, [generateResponse, prompt]);

  useEffect(() => {
    handleClick();
  }, [handleClick]);

  return (
    <TextField
      variant="outlined"
      value={response}
      placeholder="ChatGPT response"
      size='medium'
      sx={{
        background: "white",
        borderRadius: "20px"
      }}
    />
  );
}
