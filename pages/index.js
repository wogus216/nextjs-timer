import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { autocompleteClasses, Button, Grid, Stack } from '@mui/material';
import { padding, styled } from '@mui/system';
import Paper from '@mui/material/Paper';

const Circle = styled('div')({
  width: '100%',
  height: '100%',
  border: '15px solid rgb(163,151,198)',
  borderRadius: '50%',
});

export default function Index() {
  return (
    <Container maxWidth="md">
      <Stack textAlign="center" spacing={8}>
        <Box>
          <Typography variant="h4" gutterBottom component="div">
            기운과 끈기는 모든 것을 이겨낸다. - 벤자민 프랭클린
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Button variant="outlined">25분</Button>
            <Button variant="outlined">40분</Button>
            <Button variant="outlined">60분</Button>
          </Grid>
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              width: 400,
              height: 400,
              backgroundColor: 'primary.dark',
              borderRadius: '50%',
            }}
          />
        </Grid>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Button variant="outlined">체리 레드</Button>
            <Button variant="outlined">코코아 베이지</Button>
            <Button variant="outlined">인디 핑크</Button>
            <Button variant="outlined">파스탈 마린</Button>
            <Button variant="outlined">아쿠아 민트</Button>
            <Button variant="outlined">라일락 스노우</Button>
            <Button variant="outlined">옐로우</Button>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
