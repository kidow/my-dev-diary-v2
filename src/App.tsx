import React, { useState } from 'react'
import {
  Button,
  Container,
  TextField,
  Grid,
  Paper,
  Typography,
  makeStyles,
  Theme,
  Divider
} from '@material-ui/core'
import { useObject } from 'lib'

interface IApp {
  password: string
  content: string
  isLoggedIn: boolean
  page: number
  [name: string]: any
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '32px 0'
  },
  title: {
    fontSize: '4rem',
    fontWeight: 300,
    textAlign: 'center',
    padding: '2rem 0'
  },
  password: {
    background: 'white'
  },
  paper: {
    marginTop: '2rem'
  },
  padd: {
    padding: theme.spacing(2)
  },
  add: {
    marginLeft: theme.spacing(2)
  }
}))

function App() {
  const classes = useStyles()
  const [{ password, content, isLoggedIn, page }, setState] = useObject<IApp>({
    password: '',
    content: '',
    isLoggedIn: false,
    page: 1
  })
  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value, name } = e.target
    setState({ [name]: value })
  }
  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      console.log(password)
    }
  }
  const onSubmit = () => {
    console.log(1)
  }
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid container alignItems="center" justify="center">
        <TextField
          value={password}
          type="password"
          onChange={onChange}
          variant="outlined"
          label="비밀번호"
          size="small"
          autoFocus
          name="password"
          onKeyPress={onKeyPress}
          className={classes.password}
        />
      </Grid>
      <Paper className={classes.paper}>
        <Typography variant="h1" className={classes.title}>
          Kidow Diary
        </Typography>
        <Divider />
        <Grid container alignItems="center" className={classes.padd}>
          <Grid item xs>
            <TextField
              fullWidth
              value={content}
              name="content"
              onChange={onChange}
              placeholder="아무 내용이나 입력"
            />
          </Grid>
          <Grid item className={classes.add}>
            <Button variant="outlined" color="secondary" onClick={onSubmit}>
              추가
            </Button>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          alignItems="center"
          justify="space-between"
          className={classes.padd}
        >
          <Grid item>
            <Button
              variant="outlined"
              disabled={page === 1}
              onClick={() => setState({ page: page - 1 })}
            >
              이전
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">이전</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">다음</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default App
