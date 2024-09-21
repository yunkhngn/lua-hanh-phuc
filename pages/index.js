import {Homepage} from '../components/content'
import {Template} from '../components/template'
import {desc} from '../components/lib/'

export default function Home() {
  return (
    <Template meta={desc.home}>
      <Homepage/>
    </Template>
  )
}
