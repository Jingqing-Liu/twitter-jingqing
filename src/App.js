import { lazy, Suspense, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserContext from './components/context/userContext'
import SearchContext from './components/context/searchContext'
import { useAuthListener } from './services/hooks'
import { IsUserRedirect, ProtectedRoute } from './components/widgets'
import { SuspenseFallback } from './components/widgets'
import * as ROUTES from './components/routes/routes'

const Start = lazy(() => import('./pages/start'))
const Login = lazy(() => import('./pages/login'))
const SignUp = lazy(() => import('./pages/signup'))
const ResetPassword = lazy(() => import('./pages/reset-password'))
const Home = lazy(() => import('./pages/home'))
const Search = lazy(() => import('./pages/search'))
const Profile = lazy(() => import('./pages/profile'))
const Post = lazy(() => import('./pages/post'))
const Settings = lazy(() => import('./pages/settings'))
const NotFound = lazy(() => import('./pages/not-found'))

function App() {
  const { authUser, user, setUser } = useAuthListener()
  const [searchTerm, setSearchTerm] = useState()

  return (
    <UserContext.Provider value={{ authUser, user, setUser }}>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Suspense fallback={<SuspenseFallback />}>
          <Switch>
            <IsUserRedirect
              user={authUser}
              loggedInPath={ROUTES.HOME}
              exact
              path={ROUTES.START}
            >
              <Start />
            </IsUserRedirect>

            <IsUserRedirect
              user={authUser}
              loggedInPath={ROUTES.HOME}
              path={ROUTES.LOGIN}
            >
              <Login />
            </IsUserRedirect>

            <IsUserRedirect
              user={authUser}
              loggedInPath={ROUTES.HOME}
              path={ROUTES.SIGNUP}
            >
              <SignUp />
            </IsUserRedirect>

            <Route
              user={authUser}
              loggedInPath={ROUTES.HOME}
              path={ROUTES.RESET_PASSWORD}
            >
              <ResetPassword />
            </Route>

            <ProtectedRoute user={authUser} path={ROUTES.HOME}>
              <Home />
            </ProtectedRoute>

            <ProtectedRoute user={authUser} path={ROUTES.SETTINGS}>
              <Settings />
            </ProtectedRoute>

            <ProtectedRoute user={authUser} path={ROUTES.SEARCH}>
              <Search />
            </ProtectedRoute>

            <ProtectedRoute user={authUser} path={ROUTES.PROFILE}>
              <Profile />
            </ProtectedRoute>

            <ProtectedRoute user={authUser} path={ROUTES.POST}>
              <Post />
            </ProtectedRoute>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </SearchContext.Provider>
    </UserContext.Provider>
  )
}

export default App
