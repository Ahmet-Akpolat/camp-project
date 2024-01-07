import { Formik, Field, Form, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { FormField, Button, FormGroup, Label } from "semantic-ui-react"
import { CustomFormField } from '../utilities/customFormControls/AhmetFromField';
import SurveyService from '../services/surveyService';
import { toast } from 'react-toastify'

export default function SurveyAdd() {

    const threeDaysLater = new Date();
    threeDaysLater.setDate(threeDaysLater.getDate() + 2);

    const initialValues = {name:"", startDate: new Date().toISOString().split('T')[0], surveyUrl:"https://docs.google.com/forms/", description:"", endDate: new Date().toISOString().split('T')[0] }
    const schema = Yup.object({
        name: Yup.string().required("Form Adı Zorunlu!"),
        startDate: Yup.date().required("Bir Başlangıç Tarihi Giriniz.")
        .min(new Date().toISOString().split('T')[0], "Geçmiş Bir Tarih Seçilemez")
        .typeError("Geçerli bir tarih girin (gg/aa/yyyy)"),
        surveyUrl: Yup.string("Url Metin Formatında Olmalıdır.").required("Anket Url'si zorunlu").url("Anket Url'si Uygun Formatta Olmalıdır."),
        endDate: Yup.date()
        .min(threeDaysLater, "Tarih Bugünden En Az 3 Gün Sonrası Olmalıdır")
        .required("Bir Bitiş Tarihi Giriniz."),
        description: Yup.string().min(10, "Açıklama En Az 10 Karakter Olmalıdır.")

    })

  return (
    <div>
        <Formik 
        initialValues={initialValues} 
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            const surveyService = new SurveyService();
            surveyService.addSurvey(values)
              .then(response => {
                  setSubmitting(false); // Submit işlemi bitti
                  resetForm();
                  toast.success(`${response.data.name} anketi eklendi!`)
              })
              .catch(error => {
                toast.error("anketi eklemeye çalışırken hata oluştu!", error )
                  setSubmitting(false); // Bir hata oluştu, submit işlemini bitir
              });
            }} >
                
            <Form className='ui form'>
                <FormGroup widths="equal">
                    <CustomFormField label="Anket Adı" name="name" placeholder="Anket Adı" />
                    <CustomFormField label="Başlangıç Tarihi" type="date" name="startDate" />
                    <CustomFormField label="Bitiş Tarihi" type="date" name="endDate" />
                </FormGroup>
                <CustomFormField label="Anket Açıklaması" as="textarea" name="description" placeholder="Anket Detayları" rows="4" cols="50" />
                <CustomFormField label="Anket Url" name="surveyUrl" placeholder="Anket Linki" />
                <Button type='submit' primary>Ekle</Button>
            </Form>
        </Formik>
    </div>
  )
}