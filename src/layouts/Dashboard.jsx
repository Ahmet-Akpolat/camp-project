import React from 'react'
import Categories from './Categories'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import SurveyList from '../pages/SurveyList'
import Page404 from './Page404/Page404'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import SurveyAdd from "../pages/SurveyAdd"

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right'/>
      <Grid>
        <GridRow>
          <GridColumn width={4} >
            <Categories/>
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
            <Route exact path="/" Component={ProductList} />
            <Route path="/products" Component={ProductList} />
            <Route path="/products/:id" Component={ProductDetail} />
            <Route path="/surveys" Component={SurveyList} />
            <Route exact path="/survey/add" Component={SurveyAdd} />
            <Route path="/cart" Component={CartDetail}></Route>
            <Route path="*" Component={Page404}></Route>
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}
