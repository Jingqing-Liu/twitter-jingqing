import { Layout } from '../Layout'
import { SettingsOrg, EditInfo, SettingsResetPassword } from '../org'
import { useContext } from 'react'
import UserContext from '../context/userContext'
import { Switch, Route } from 'react-router'
import * as ROUTES from '../routes/routes'

export default function SettingsTemplate() {
  const { user } = useContext(UserContext)

  return (
    <Layout user={user} showSearchBar={false} showSuggestion={false}>
      <Switch>
        <Route exact path={ROUTES.SETTINGS}>
          <SettingsOrg user={user} />
        </Route>

        <Route path={ROUTES.SETTINGS_EDIT}>
          <EditInfo user={user} />
        </Route>

        <Route path={ROUTES.SETTINGS_RESET}>
          <SettingsResetPassword user={user} />
        </Route>
      </Switch>
    </Layout>
  )
}
