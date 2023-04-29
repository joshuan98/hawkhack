
import React, { useCallback, useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { Box, TextField } from '@mui/material';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANISATION,
  apiKey: process.env.OPENAI_APIKEY
});

const openai = new OpenAIApi(configuration);

interface PromptProps {
}

export default function Activities({ }: PromptProps) {
  const [response, setResponse] = useState<string>('')

  const generateResponse = useCallback(async (input: string) => {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      max_tokens: 64
    });

    return completion.data.choices[0].text;
  }, [])

  const handleClick = useCallback(async () => {
    // const res = await generateResponse(input)
    // setResponse(res)
  }, [])

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
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
    </Box>
  );
}
