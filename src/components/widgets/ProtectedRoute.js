import { Route, Redirect } from 'react-router-dom'
import * as ROUTES from '../routes/routes'

export default function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) return children

        if (!user)
          return (
            <Redirect
              to={{ pathname: ROUTES.START, state: { from: location } }}
            />
          )

        return null
      }}
    />
  )
}
