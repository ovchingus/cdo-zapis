import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import Link from '../Link'
import SvgIcon from '../SvgIcon'
import navRoutes from './routes.json'


const isCurrent = (pathname, href) => ((pathname === href) ? 'true' : 'false')

const useStyles = makeStyles((theme) => ({
  icon: {
    width: 150,
    height: 50,
    transition: 'fill 0.4s',
    fill: (props) => (props.iscurrent === 'true' ? theme.palette.secondary.main : theme.palette.primary.contrastText),
    '&:hover': {
      fill: theme.palette.secondary.main,
    },

  },
  link: {
    paddingLeft: theme.spacing(4),
    textDecoration: (props) => (props.iscurrent === 'true' ? 'underline' : 'none'),
    color: (props) => (props.iscurrent === 'true' ? theme.palette.secondary.main : 'inherit'),
    transition: 'color 0.4s',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: (props) => (props.iscurrent === 'true' ? 'underline' : 'none'),
    },
  },
  iconButton: {
    color: (props) => (props.iscurrent === 'true' ? theme.palette.secondary.main : theme.palette.secondary.contrastText),
    transition: 'color 0.4s',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  profile: {
    position: 'absolute',
    right: 24,
  },
  profileName: {
    lineHeight: 64,
  },
  login: {
    position: 'absolute',
    right: 24,
  },
}))

const MuiLink = (props) => {
  const classes = useStyles(props)
  return (
    <Link
      className={classes.link}
      {...props}
    />
  )
}

const MuiSvgIcon = (props) => {
  const classes = useStyles(props)
  return (
    <SvgIcon
      className={classes.icon}
      {...props}
    />
  )
}

const MuiIconButton = (props) => {
  const classes = useStyles(props)
  return (
    <IconButton
      className={classes.iconButton}
      {...props}
    />
  )
}


const DesktopHeader = ({
  isAuth,
  login,
  authExit,
}) => {
  const { pathname } = useLocation()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleExit = () => {
    setAnchorEl(null)
    authExit()
  }

  return (
    <>
      <Link
        key={navRoutes[0].name}
        to={navRoutes[0].href}
        color='inherit'
      >
        <MuiSvgIcon
          viewBox='0 0 320 108'
          iscurrent={isCurrent(pathname, navRoutes[0].href)}
        >
          <g>
            <path xmlns='http://www.w3.org/2000/svg' d='M94.632,24.339c-0.952-1.368-1.973-2.686-3.054-3.949c-0.016-0.018-0.026-0.039-0.042-0.058  c-0.02-0.023-0.044-0.042-0.064-0.065c-1.082-1.256-2.225-2.457-3.425-3.599C81.528,10.459,73.343,5.994,64.223,4.016  c-3.43-0.744-6.987-1.146-10.641-1.146c-3.653,0-7.21,0.402-10.641,1.146C29.236,6.988,17.627,15.574,10.645,27.251  c-2.159,3.61-3.868,7.516-5.067,11.641C4.287,43.33,3.582,48.017,3.582,52.87c0,10.569,3.29,20.368,8.889,28.444  c0.841,1.213,1.729,2.391,2.671,3.522c0.131,0.203,0.271,0.402,0.429,0.587c0.177,0.207,0.372,0.397,0.578,0.575  c0.956,1.079,1.958,2.113,3.002,3.105c6.513,6.191,14.687,10.645,23.791,12.619c3.43,0.744,6.988,1.146,10.641,1.146  c3.653,0,7.211-0.402,10.641-1.146c13.755-2.982,25.396-11.621,32.37-23.363c2.079-3.499,3.739-7.272,4.92-11.254  c1.339-4.514,2.069-9.289,2.069-14.236C103.582,42.262,100.269,32.432,94.632,24.339z M84.703,84.197  c-2.767,2.748-5.898,5.126-9.308,7.07c-1.103,0.629-2.234,1.212-3.395,1.746c1.907-2.295,3.642-4.943,5.175-7.876  c-0.797,0.034-1.604,0.059-2.434,0.059c-1.372,0-2.772-0.059-4.188-0.155c-0.025,0.041-0.049,0.085-0.074,0.125  c-4.735,7.664-10.737,11.886-16.897,11.886c-6.126,0-12.094-4.178-16.817-11.761c-0.026-0.043-0.054-0.082-0.081-0.125  c-0.265-0.429-0.52-0.87-0.773-1.313c-0.938-1.646-1.793-3.389-2.562-5.217c-0.208-0.495-0.408-0.999-0.604-1.506  c-0.659-1.712-1.246-3.49-1.756-5.327c-1.424-0.875-2.802-1.777-4.13-2.703c-0.174,0.263-0.353,0.527-0.521,0.787  c-0.481,0.748-0.911,1.454-1.303,2.129c0.646,2.517,1.416,4.928,2.296,7.217c0.192,0.501,0.386,0.999,0.589,1.487  c0.771,1.856,1.621,3.619,2.534,5.288c0.273,0.498,0.553,0.985,0.838,1.466c1.194,2.013,2.485,3.872,3.872,5.54  c-1.16-0.534-2.292-1.117-3.395-1.746c-1.448-0.826-2.846-1.729-4.187-2.707c-0.582-0.425-1.152-0.862-1.711-1.314  c0.951-0.188,1.945-0.431,2.981-0.733c-0.919-1.701-1.769-3.476-2.533-5.329c-1.773,0.462-3.305,0.69-4.554,0.69  c-0.907,0-1.411-0.124-1.651-0.21c-0.045-0.016-0.084-0.031-0.111-0.043c-0.009-0.031-0.017-0.074-0.024-0.113  c-0.183-0.893,0.043-3.988,3.291-9.735c0.363-0.643,0.777-1.33,1.22-2.04c0.153-0.246,0.298-0.484,0.461-0.738  c0.181-0.282,0.375-0.567,0.563-0.852c-0.533-0.389-1.06-0.78-1.576-1.176c-0.664-0.509-1.312-1.022-1.945-1.542  c-0.36-0.295-0.716-0.592-1.065-0.89c-2.55,3.781-4.441,7.318-5.574,10.441c-0.363-0.625-0.711-1.26-1.044-1.904  C11.18,67.013,9.4,60.147,9.4,52.87c0-0.51,0.021-1.014,0.039-1.52c0.035-1.042,0.097-2.076,0.204-3.098  c2.231,4.595,5.959,9.334,10.97,13.836c0.342,0.308,0.688,0.614,1.042,0.92c0.069,0.059,0.134,0.119,0.203,0.179  c0.549,0.469,1.111,0.935,1.688,1.396c0.927,0.744,1.898,1.477,2.896,2.2c0.441,0.321,0.888,0.64,1.343,0.957  c0.846,0.588,1.717,1.168,2.608,1.739c0.658,0.423,1.33,0.84,2.013,1.252c0.986,0.596,1.988,1.184,3.023,1.756  c1.043,0.577,2.094,1.124,3.149,1.656c0.603,0.305,1.206,0.61,1.812,0.9c2.178,1.042,4.375,1.98,6.576,2.834  c0.649,0.252,1.299,0.496,1.949,0.732c2.415,0.875,4.826,1.637,7.216,2.281c0.212,0.751,0.593,1.429,1.1,1.993  c0.923,1.028,2.258,1.68,3.749,1.68c0.736,0,1.434-0.162,2.063-0.445c0.705-0.317,1.325-0.788,1.813-1.374  c1.626,0.25,3.226,0.441,4.796,0.574c0.617,0.052,1.228,0.092,1.834,0.125c1.102,0.061,2.191,0.103,3.255,0.103  c1.117,0,2.21-0.036,3.279-0.104c0.646-0.041,1.283-0.094,1.91-0.16c2.468-0.258,4.777-0.713,6.893-1.359  C86.142,82.705,85.438,83.467,84.703,84.197z M97.722,54.523c-0.038,1.04-0.107,2.072-0.217,3.094  c-0.366-0.763-0.772-1.527-1.221-2.296c0.204-0.548,0.321-1.138,0.321-1.756c0-0.336-0.035-0.664-0.098-0.982  c-0.295-1.491-1.245-2.746-2.54-3.45c-0.715-0.389-1.534-0.609-2.405-0.609c-0.08,0-0.158,0.008-0.238,0.012  c-1.444-1.639-3.061-3.264-4.837-4.861c-0.317-0.285-0.639-0.569-0.967-0.853c0.078,0.635,0.143,1.275,0.206,1.916  c0.217,2.201,0.343,4.438,0.382,6.698c0.212,0.228,0.42,0.456,0.625,0.684c-0.137,0.459-0.213,0.943-0.213,1.447  c0,0.303,0.031,0.598,0.082,0.885c0.278,1.569,1.28,2.886,2.65,3.594c0.671,0.347,1.429,0.548,2.233,0.56  c1.251,2.222,2.08,4.399,2.413,6.466c0.486,3.014-0.17,5.443-2.007,7.432c-1.979,2.146-5.296,3.696-9.505,4.527  c-0.604,0.12-1.226,0.226-1.865,0.315c-1.801,0.25-3.734,0.384-5.78,0.384c-0.182,0-0.369-0.01-0.553-0.012  c-0.581-0.007-1.164-0.017-1.755-0.042c-2.316-0.101-4.704-0.354-7.133-0.742c-0.595-0.99-1.518-1.758-2.621-2.153  c-0.425-0.152-0.876-0.249-1.346-0.282c-0.117-0.008-0.234-0.018-0.354-0.018c-1.078,0-2.075,0.341-2.895,0.918  c-1.04-0.274-2.082-0.57-3.126-0.891c-0.655-0.201-1.31-0.413-1.965-0.632c-2.214-0.739-4.424-1.579-6.614-2.515  c-0.623-0.265-1.242-0.535-1.86-0.816c-2.124-0.965-4.225-2.013-6.28-3.15c-2.455-1.355-4.78-2.802-6.958-4.311  c-0.154-0.107-0.31-0.214-0.463-0.321c-0.298-0.21-0.593-0.421-0.884-0.633c-0.32-0.231-0.634-0.465-0.947-0.699  c-1.267-0.951-2.475-1.922-3.615-2.907c-0.422-0.364-0.834-0.731-1.238-1.1c-0.471-0.43-0.934-0.86-1.379-1.294  c-0.589-0.573-1.156-1.149-1.699-1.728c-4.36-4.648-7.165-9.414-7.86-13.707c-0.489-3.018,0.165-5.452,1.997-7.439  c1.994-2.159,5.338-3.715,9.582-4.543c0.72-2.166,1.539-4.254,2.453-6.25c-2.464,0.255-4.768,0.705-6.883,1.345  c0.681-0.778,1.382-1.537,2.115-2.265c2.766-2.748,5.897-5.125,9.307-7.07c1.103-0.629,2.235-1.212,3.395-1.746  c-1.91,2.298-3.646,4.95-5.181,7.887c-0.29,0.554-0.57,1.12-0.845,1.694c-0.92,1.924-1.755,3.958-2.497,6.092  c-0.202,0.58-0.395,1.167-0.583,1.762c-0.441,1.399-0.843,2.835-1.204,4.307c-0.792,0.299-1.49,0.791-2.034,1.42  c-0.764,0.884-1.229,2.033-1.229,3.293c0,0.613,0.115,1.198,0.315,1.741c0.291,0.788,0.771,1.483,1.388,2.03  c-0.399,3.206-0.61,6.521-0.61,9.917c0,0.299,0.011,0.593,0.014,0.891c0.774,0.803,1.598,1.603,2.467,2.395  c1.062-1.283,2.181-2.571,3.346-3.86c0.022-2.959,0.209-5.87,0.561-8.701c0.805-0.446,1.472-1.106,1.931-1.902  c0.426-0.74,0.673-1.595,0.673-2.51c0-0.273-0.028-0.539-0.069-0.8c-0.149-0.931-0.549-1.777-1.133-2.464  c0.524-2.156,1.147-4.242,1.87-6.241c0.2-0.553,0.41-1.097,0.625-1.637c0.801-2.009,1.699-3.926,2.7-5.726  c0.302-0.543,0.614-1.075,0.933-1.597c0.029-0.046,0.055-0.096,0.084-0.143C41.42,12.91,47.421,8.688,53.582,8.688  c6.123,0,12.088,4.173,16.81,11.75c1.898-0.857,3.729-1.586,5.477-2.179c-1.192-2.01-2.482-3.867-3.867-5.532  c1.16,0.534,2.292,1.117,3.395,1.746c1.447,0.825,2.844,1.727,4.184,2.705c0.581,0.425,1.152,0.863,1.713,1.315  c-0.951,0.185-1.946,0.428-2.982,0.729c-0.524,0.152-1.06,0.321-1.604,0.502c-1.729,0.575-3.556,1.295-5.461,2.15  c-0.496,0.223-0.997,0.454-1.504,0.695c-2.508,1.194-5.137,2.61-7.847,4.231c-0.584,0.35-1.172,0.708-1.764,1.076  c-1.978,1.232-3.992,2.568-6.029,4.003c-0.551,0.388-1.104,0.783-1.658,1.186c-1.656,1.204-3.322,2.468-4.992,3.793  c-0.481-0.153-0.994-0.236-1.525-0.236c-0.316,0-0.624,0.033-0.924,0.088c-1.755,0.325-3.187,1.559-3.797,3.196  c-0.204,0.548-0.321,1.139-0.321,1.758c0,0.228,0.021,0.451,0.049,0.67c-3.958,3.513-7.571,7.086-10.78,10.608  c-0.554,0.607-1.094,1.212-1.623,1.817c-0.732,0.835-1.442,1.667-2.125,2.492c0.759,0.654,1.545,1.304,2.364,1.944  c0.58,0.454,1.177,0.904,1.785,1.35c0.141,0.103,0.28,0.205,0.422,0.308c3.934-4.743,8.666-9.599,13.918-14.253  c0.333,0.069,0.679,0.107,1.033,0.107c0.595,0,1.165-0.108,1.695-0.298c1.14-0.407,2.09-1.211,2.682-2.249  c0.421-0.736,0.665-1.586,0.665-2.496c0-0.055-0.006-0.108-0.008-0.162c2.789-2.224,5.508-4.229,8.125-6.015  c0.549-0.375,1.093-0.738,1.632-1.094c2.072-1.366,4.074-2.592,5.991-3.683c0.591-0.336,1.176-0.663,1.749-0.974  c1.332-0.721,2.618-1.375,3.853-1.959c0.51-0.242,1.008-0.467,1.5-0.686c1.967-0.874,3.785-1.565,5.432-2.079  c0.553-0.172,1.088-0.328,1.602-0.46c1.747-0.453,3.259-0.677,4.492-0.677c1.073,0,1.587,0.176,1.762,0.254  c0.001,0,0.003,0.001,0.004,0.001c0.001,0.001,0.001,0.003,0.001,0.004c0.223,0.731,0.118,3.827-3.223,9.767  c0.521,2.114,0.963,4.282,1.306,6.498c0.333,0.274,0.663,0.549,0.987,0.826c2.571-3.814,4.475-7.378,5.605-10.521  c0.364,0.626,0.713,1.26,1.047,1.904c3.148,6.073,4.938,12.959,4.938,20.259C97.764,53.424,97.742,53.974,97.722,54.523z   M34.848,77.947c0.767,1.83,1.625,3.57,2.568,5.209c2.49-1.188,5.1-2.595,7.788-4.202c-2.212-0.892-4.403-1.873-6.561-2.938  C37.331,76.727,36.063,77.37,34.848,77.947z M76.618,45.267c-0.165-0.121-0.328-0.242-0.494-0.362  c-4.398,5.302-9.794,10.744-15.797,15.885c-4.264,3.654-8.4,6.806-12.313,9.477c2.202,0.909,4.422,1.717,6.64,2.423  c3.134-2.277,6.306-4.777,9.461-7.482c4.793-4.104,9.124-8.319,12.896-12.463C77.006,50.207,76.869,47.709,76.618,45.267z   M84.412,49.703c-0.039-1.004-0.099-1.999-0.174-2.986c-0.062-0.821-0.136-1.636-0.223-2.444c-0.109-1.021-0.238-2.032-0.385-3.031  c-0.118-0.804-0.249-1.6-0.391-2.388c-0.177-0.979-0.366-1.95-0.578-2.904c-0.172-0.771-0.354-1.532-0.548-2.285  c-0.643-2.497-1.409-4.889-2.283-7.162c-1.691,0.518-3.512,1.229-5.417,2.096c0.669,1.736,1.264,3.541,1.779,5.405  c0.212,0.766,0.409,1.542,0.595,2.326c0.312,1.324,0.588,2.674,0.823,4.047c0.128,0.746,0.244,1.498,0.349,2.257  c0.08,0.581,0.156,1.164,0.223,1.751c0.084,0.74,0.156,1.485,0.218,2.235c0.117,1.42,0.196,2.856,0.232,4.307  c0.017,0.646,0.028,1.293,0.028,1.944c0,0.175-0.006,0.348-0.007,0.522c-0.056,8.143-1.386,15.91-3.838,22.685  c2.24-0.003,4.355-0.173,6.288-0.494c2.153-6.817,3.376-14.532,3.376-22.713c0-0.268-0.01-0.532-0.013-0.799  C84.46,51.277,84.442,50.488,84.412,49.703z M75.817,42.676c0.18,0.125,0.358,0.249,0.536,0.375  c-0.04-0.298-0.077-0.598-0.122-0.894c-0.361-2.437-0.851-4.803-1.455-7.083c-1.016-0.615-2.048-1.223-3.116-1.813  c-1.039-0.575-2.087-1.119-3.138-1.649c-1.956,1.1-3.949,2.309-5.944,3.601c2.12,0.962,4.215,2.006,6.267,3.141  C71.305,39.712,73.635,41.163,75.817,42.676z M58.184,27.147c-7.094-2.57-14.161-4.151-20.685-4.706  c-1.026,1.769-1.957,3.651-2.778,5.643c5.533,0.245,11.462,1.338,17.417,3.166C54.171,29.789,56.19,28.418,58.184,27.147z' />
          </g>
          <g transform='matrix(1.3539127968269322,0,0,1.3539127968269322,116.58813977781996,20.027620349927455)'>
            <path d='M5.56 20 c0.24 0 0.44 0.16 0.44 0.4 l0 19.6 l-3.04 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -19.56 l3.04 0 z M5.56 11.04 c0.24 0 0.44 0.2 0.44 0.44 l0 3.28 l-3.04 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -3.28 l3.04 0 z M20.520000000000003 36.68 c0.24 0 0.44 0.2 0.44 0.44 l0 2.88 l-4.04 0 c-3.2 0 -5.84 -2.6 -5.84 -5.84 l0 -23.84 l3.04 0 c0.24 0 0.44 0.2 0.44 0.44 l0 10 c0.2 -0.44 0.64 -0.72 1.16 -0.72 l4.24 0 l0 2.88 c0 0.24 -0.2 0.4 -0.44 0.4 l-4.96 0 l0 11 c0 1.32 1.04 2.36 2.36 2.36 l3.6 0 z M42.96 20 c3.24 0 5.84 2.6 5.84 5.84 l0 14.16 l-3.04 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -13.92 c0 -1.28 -1.04 -2.36 -2.36 -2.36 l-5.2 0 c0.4 0.24 0.72 0.64 0.72 1.12 l0 15.6 l-3.04 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -15.84 c0 -0.24 -0.2 -0.44 -0.44 -0.44 l-6.04 0 c-0.2 0 -0.36 0.16 -0.4 0.36 l0 15.92 c0 0.24 -0.2 0.44 -0.44 0.44 l-3.04 0 l0 -17.4 c0 -1.44 1.16 -2.6 2.6 -2.6 l15.72 0 z M64.6 40.28 l-5.28 0 c-3.24 0 -5.84 -2.6 -5.84 -5.84 l0 -8.88 c0 -3.2 2.6 -5.84 5.84 -5.84 l5.28 0 c3.24 0 5.88 2.64 5.88 5.84 l0 8.88 c0 3.24 -2.64 5.84 -5.88 5.84 z M59.31999999999999 23.04 c-1.32 0 -2.36 1.08 -2.36 2.36 l0 9.2 c0 1.32 1.04 2.4 2.36 2.4 l5.28 0 c1.32 0 2.4 -1.08 2.4 -2.4 l0 -9.2 c0 -1.28 -1.08 -2.36 -2.4 -2.36 l-5.28 0 z M86.6 26.2 c0 0.28 -0.24 0.52 -0.52 0.52 l-10.76 0 l0 -2.92 c0 -0.28 0.24 -0.52 0.52 -0.52 l10.76 0 l0 2.92 z M101.32000000000001 20 c3.24 0 5.84 1.96 5.84 5.6 l0 13.12 c0 0.72 -0.56 1.28 -1.28 1.28 l-0.44 0 l-1.76 0 l-7.16 0 c-3.24 0 -5.84 -2.6 -5.84 -5.84 l0 -1.24 c0 -3.24 2.6 -5.84 5.84 -5.84 l6.76 0 c0.24 0 0.44 -0.2 0.44 -0.44 l0 -1 c0 -1.28 -0.84 -2.36 -2.4 -2.36 l-7.96 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -2.84 l8.4 0 z M94.16000000000001 34.24 c0 1.32 1.04 2.36 2.36 2.36 l6.8 0 c0.24 0 0.4 -0.2 0.4 -0.44 l0 -6.36 c-0.2 0.36 -0.6 0.56 -1.04 0.6 l-6.16 0 c-1.32 0 -2.36 1.04 -2.36 2.36 l0 1.48 z M128.68 34.36 c0 3.36 -2.64 5.64 -5.84 5.64 l-4.6 0 c-1.24 0 -2.24 -0.64 -2.72 -1.28 l0 10.6 c0 0.24 -0.2 0.44 -0.44 0.44 l-3.04 0 l0 -28.52 c0 -0.68 0.56 -1.24 1.28 -1.24 l9.52 0 c3.2 0 5.84 1.68 5.84 5.64 l0 8.72 z M125.20000000000002 34.32 l0 -8.68 c0 -1.84 -1.08 -2.36 -2.36 -2.36 l-6.88 0 c-0.24 0 -0.44 0.2 -0.44 0.44 l0 10.92 c0.08 1.04 0.88 1.92 1.92 2.04 l5.4 0 c1.28 0 2.36 -1.04 2.36 -2.36 z M150.24 34.36 c0 3.36 -2.64 5.64 -5.84 5.64 l-4.6 0 c-1.24 0 -2.24 -0.64 -2.72 -1.28 l0 10.6 c0 0.24 -0.2 0.44 -0.44 0.44 l-3.04 0 l0 -28.52 c0 -0.68 0.56 -1.24 1.28 -1.24 l9.52 0 c3.2 0 5.84 1.68 5.84 5.64 l0 8.72 z M146.76000000000002 34.32 l0 -8.68 c0 -1.84 -1.08 -2.36 -2.36 -2.36 l-6.88 0 c-0.24 0 -0.44 0.2 -0.44 0.44 l0 10.92 c0.08 1.04 0.88 1.92 1.92 2.04 l5.4 0 c1.28 0 2.36 -1.04 2.36 -2.36 z' />
          </g>
        </MuiSvgIcon>
      </Link>
      {navRoutes.slice(1).map((route, index) => (
        <MuiLink
          iscurrent={isCurrent(pathname, route.href)}
          key={route.name}
          to={route.href}
          color='inherit'
        >
          <Typography variant='h6' noWrap>
            {route.label}
          </Typography>
        </MuiLink>
      ))}
      {isAuth ? (
        <>
          <IconButton
            className={classes.profile}
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Some settings</MenuItem>
            <MenuItem onClick={handleClose}>Some info</MenuItem>
            <MenuItem onClick={handleClose}>Some configurations</MenuItem>
            <MenuItem onClick={handleExit}>Exit</MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <div
            className={classes.login}
          >
            <Link
              to='/login'
            >
              <MuiIconButton
                iscurrent={isCurrent(pathname, '/login')}
              >
                <VpnKeyIcon />
              </MuiIconButton>
            </Link>
          </div>
        </>
      )}
    </>
  )
}

export default DesktopHeader
