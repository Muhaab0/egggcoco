import React from 'react'
import CustomPackageForm from '../../components/customPackageForm/customPackageForm'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'


export default function CustomPackage() {
  return (
    <div>
    <Navbar />
    <CustomPackageForm />
    <Footer />
    </div>
  )
}
