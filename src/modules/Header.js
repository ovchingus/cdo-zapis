import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import BrightnessDark from '@material-ui/icons/Brightness4'
import BrightnessLight from '@material-ui/icons/Brightness7'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    justifyContent: 'space-between'
  }
}))

export default function Header ({ handleMenuShow, currentPath, handleThemeChange }) {
  const classes = useStyles()
  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color='inherit'
          aria-label='open navigation'
          edge='start'
          onClick={handleMenuShow}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div>
          <IconButton
            aria-label='change theme'
            onClick={() => handleThemeChange('dark')}
          >
            <BrightnessDark />
          </IconButton>
          <IconButton
            aria-label='change theme'
            onClick={() => handleThemeChange('light')}
          >
            <BrightnessLight />
          </IconButton>
          <Button
            color='inherit'
            href='/login'
          >Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
