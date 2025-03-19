import { Route, Routes } from 'react-router'

import { DefaultLayout } from '../pages/DefaultLayout'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:issue" element={<Post />} />
      </Route>
    </Routes>
  )
}
