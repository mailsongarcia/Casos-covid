import {Container, Header, Content } from './styles'
import {api} from '../../services/api'
import {eachMonthOfInterval, lastDayOfMonth, format, getMonth} from 'date-fns'
import { useState, useEffect} from 'react'
import logo  from '../../assets/logo.png';
import countries from '../../countries.json'

export function Dashboard( ) {
  const [country, setCountry] = useState('');
  const [countryPt, setCountryPt] = useState('');
  let [casesCovid, setcasesCovid] = useState([]);



  useEffect(() => {
    api.get(`${country}/status/confirmed`)
    .then(response => setcasesCovid(response.data))
  
    
  }, [country])

  let lastDaysMonths = eachMonthOfInterval({
    start: new Date(2019, 12, 1),
    end: new Date(2021, 7, 8)
  })
  lastDaysMonths = lastDaysMonths.map((item) => { return format(new Date(lastDayOfMonth(item)), 'yyyy/MM/dd')})
  
    
    
    function handleGetMonth (date) {
    let month = getMonth(new Date (date))

      let arrayMonths = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      return arrayMonths[month]
    }

  function findDateEqualy(date) {
    
    return lastDaysMonths.find (item => item === date)
  }

  casesCovid = casesCovid.filter((item) => format(new Date(item.Date), 'yyyy/MM/dd') === findDateEqualy(format(new Date(item.Date), 'yyyy/MM/dd')))

  
  return (
    <Container>
      <Header>
      <img src={logo} alt="" />
       
      <label for="País">País:</label>
        <select  name="País:" onChange={event => setCountry(event.target.value)} onClick={event => setCountryPt(event.target.selectedOptions[0].text)}>
        {countries.map(country => (
          
        
          <option value={country.sigla2}>{country.nome}</option>
          
         
          ))}
          </select>
        
        
      </Header>
      <Content>
    <p>Total de casos de COVID no(a) {countryPt} agrupados por mês:</p>
    <table>
      <thead>
        <th>Mês</th>
        <th>Total</th>
      </thead>
   
      <tbody>
        {casesCovid.map((item, index) => (
          <tr key={index}>
          <td>{handleGetMonth(item.Date)}</td>
          
          <td>{item.Cases}</td>
        </tr>
        ))}
        
       
      </tbody>
    </table>
    </Content>
    </Container>
  )
}