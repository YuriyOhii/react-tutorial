import paintingsData from "./paintings.json";
import PaintingList from "./components/PaintingsList";
import Section from './components/Section'

export default function App() {
    return (
     <>
      <Section
       title = "Нова секція"
       />
       <Section>
        <PaintingList
         data={paintingsData}/>
       </Section>
       
       
       </> 
       
    )
}
