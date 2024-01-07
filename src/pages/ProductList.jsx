import React, { useState, useEffect } from 'react'
import {  TableRow,  TableHeaderCell,  TableHeader,  TableFooter,  TableCell,  TableBody,  MenuItem,  Icon, Menu, Table, Button,} from 'semantic-ui-react'
import ProductService from '../services/productService';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';
import { addToCart } from "../store/actions/cartActions"
import { toast } from 'react-toastify'

export default function ProductList() {

  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const productService = new ProductService();
    productService.getProducts()
      .then(result => setProducts(result.data.products));;
  }, []);

  const handleAddToCard=(product)=>{
    dispatch(addToCart(product))
    toast.success(`${product.title} sepete eklendi!`)
  }
  
  return (
    <div>
     <Table celled>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Ürün Adı</TableHeaderCell>
        <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
        <TableHeaderCell>Stok Adedi</TableHeaderCell>
        <TableHeaderCell>Açıklama</TableHeaderCell>
        <TableHeaderCell>Kategori</TableHeaderCell>
        <TableHeaderCell>Sepete Ekle</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
    {products.map(product => (
        <TableRow key={product.id}>
          <TableCell ><Link to={`/products/${product.id}`} style={{color: 'black', fontWeight: 'bold' }}>{product.title}</Link></TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.stock}</TableCell>
          <TableCell>{product.description}</TableCell>
          <TableCell>{product.category}</TableCell>
          <TableCell>
            <Button onClick={() => {handleAddToCard(product)}} style={{whiteSpace:"nowrap" }} primary >Sepete Ekle</Button>
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
