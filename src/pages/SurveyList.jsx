import React, { useState, useEffect } from 'react'
import {  TableRow,  TableHeaderCell,  TableHeader,  TableFooter,  TableCell,  TableBody,  MenuItem,  Icon, Menu, Table, Button } from 'semantic-ui-react'
import SurveyService from '../services/surveyService';

export default function SurveyList() {

  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    const surveyService = new SurveyService();
    surveyService.getSurveys()
      .then(result => setSurveys(result.data.items));;
  }, []);
  
  const handleDeleteSurvey = (id) => {
    const surveyService = new SurveyService();
    surveyService.deleteSurvey(id)
      .then(response => {
        // İşlem başarılı olduğunda yapılacak işlemler
        console.log('Anket veritabanından başarıyla silindi.', response);
        // UI'den anketi kaldır
        setSurveys(surveys.filter(survey => survey.id !== id));
      })
      .catch(error => {
        // Hata durumunda yapılacak işlemler
        console.error('Anket veritabanından silinirken hata oluştu:', error.response);
      });
  }
  
  
  return (
    <div>
     <Table celled>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Anket Adı</TableHeaderCell>
        <TableHeaderCell>Anket Açıklaması</TableHeaderCell>
        <TableHeaderCell>Başlangıç Tarihi</TableHeaderCell>
        <TableHeaderCell>Bitiş Tarihi</TableHeaderCell>
        <TableHeaderCell>Anket URL</TableHeaderCell>
        <TableHeaderCell>Anketi Sil</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
    {surveys.map(survey => (
        <TableRow key={survey.id}>
          <TableCell>{survey.name}</TableCell>
          <TableCell>{survey.description}</TableCell>
          <TableCell>{new Date(survey.startDate).toLocaleDateString()}</TableCell>
          <TableCell>{new Date(survey.endDate).toLocaleDateString()}</TableCell>
          <TableCell><a href={survey.surveyUrl} target='_blank' rel="noreferrer" >{survey.surveyUrl}</a></TableCell>
          <TableCell>
            <Button color='red' onClick={() => {handleDeleteSurvey(survey.id)}} style={{whiteSpace:"nowrap" }} >Sil</Button>
          </TableCell>
        </TableRow>
      ))}

    </TableBody>

    <TableFooter>
      <TableRow>
        <TableHeaderCell colSpan='6'>
          <Menu floated='right' pagination>
            <MenuItem as='a' icon>
              <Icon name='chevron left' />
            </MenuItem>
            <MenuItem as='a'>1</MenuItem>
            <MenuItem as='a'>2</MenuItem>
            <MenuItem as='a'>3</MenuItem>
            <MenuItem as='a'>4</MenuItem>
            <MenuItem as='a' icon>
              <Icon name='chevron right' />
            </MenuItem>
          </Menu>
        </TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
    </div>
  )
}
