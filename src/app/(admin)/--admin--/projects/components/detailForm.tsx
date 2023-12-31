'use client'

import { memo } from 'react'
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { IProject } from '@/models/project'
import { Switch } from '@mui/material'
import ImageInput from './imageInput'
import { projectEditForm } from '@/formik/schema/validation'
import DescriptionEnInput from './descriptionEnInput'
import DescriptionFaInput from './descriptionFaInput'
import TitleFaInput from './titleFaInput'
import TitleEnInput from './titleEnInput'
import LiveInput from './liveInput'
import ClientEnInput from './clientEnInput'
import ClientFaInput from './clientFaInput'
import TechnologiesInput from './technologiesInput'

const DetailForm = memo(
   ({ addingNewproject, project }: { addingNewproject: boolean; project: IProject }) => {
      const router = useRouter()

      const handleSubmit = async (values: {
         live: string
         technologies: string
         titleEn: string
         titleFa: string
         descriptionEn: string
         descriptionFa: string
         clientEn: string
         clientFa: string
         active: boolean
      }) => {
         try {
            toast.info('Submitting Data...')

            const payload = {
               _id: addingNewproject ? null : project._id,
               ...values,
            }

            const res = await fetch('/api/--admin--/project', {
               method: addingNewproject ? 'POST' : 'PATCH',
               body: JSON.stringify(payload),
            })

            const resData = await res.json()

            if (!res.ok) throw new Error()
            else if (resData.status == 500) {
               console.error(resData.message)
               return toast.error('Connection Error!')
            }

            toast.success('Project Data Submitted Successfully.')

            fetch('/api/--admin--/revalidate?path=/')
            fetch('/api/--admin--/revalidate?path=/projects/' + values.titleEn)

            if (addingNewproject) {
               router.push(`/--admin--/projects/${resData._id}`)
            }
         } catch (err) {
            toast.error('Connection Error. Please Try Again.')
            return console.error(err)
         }
      }

      const handleDeleteproject = async () => {
         try {
            if (project.mobile1stImage || project.mobile2ndImage) {
               return toast.warning(
                  // eslint-disable-next-line quotes
                  "For Deleting the Project, You Should Delete It's Related Images",
               )
            }

            toast.info('Deleting The Project...')

            const payload = {
               _id: project._id,
            }

            const res = await fetch('/api/--admin--/project', {
               method: 'DELETE',
               body: JSON.stringify(payload),
            })

            const resData = await res.json()

            if (!res.ok) throw new Error()
            else if (resData.status == 500) {
               console.error(resData.message)
               return toast.error('Connection Error!')
            }

            toast.success('Project Deleted Successfully.')

            fetch('/api/--admin--/revalidate?path=/')

            router.push('/--admin--/projects')
         } catch (err) {
            toast.error('Connection Error. Please Try Again.')
            return console.error(err)
         }
      }

      return (
         <Formik
            initialValues={{
               live: addingNewproject ? '' : project.live,
               technologies: addingNewproject ? '' : project.technologies,
               titleEn: addingNewproject ? '' : project.titleEn,
               titleFa: addingNewproject ? '' : project.titleFa,
               descriptionEn: addingNewproject ? '' : project.descriptionEn,
               descriptionFa: addingNewproject ? '' : project.descriptionFa,
               clientEn: addingNewproject ? '' : project.clientEn,
               clientFa: addingNewproject ? '' : project.clientFa,
               active: addingNewproject ? true : project.active,
            }}
            validationSchema={projectEditForm}
            onSubmit={handleSubmit}
         >
            {({ values, setFieldValue, isSubmitting, errors, touched }) => (
               <Form className='mt-6 grid grid-cols-3 gap-5 '>
                  <div className='col-span-1'>
                     {addingNewproject ? (
                        ''
                     ) : (
                        <ImageInput project={JSON.parse(JSON.stringify(project))} />
                     )}
                  </div>
                  <div className='col-span-2 space-y-5'>
                     <LiveInput
                        value={values.live}
                        setFieldValue={setFieldValue}
                        error={errors.live}
                        touch={touched.live}
                     />

                     <TechnologiesInput
                        value={values.technologies}
                        setFieldValue={setFieldValue}
                        error={errors.technologies}
                        touch={touched.technologies}
                     />

                     <TitleEnInput
                        value={values.titleEn}
                        setFieldValue={setFieldValue}
                        error={errors.titleEn}
                        touch={touched.titleEn}
                     />

                     <TitleFaInput
                        value={values.titleFa}
                        setFieldValue={setFieldValue}
                        error={errors.titleFa}
                        touch={touched.titleFa}
                     />

                     <ClientEnInput
                        value={values.clientEn}
                        setFieldValue={setFieldValue}
                        error={errors.clientEn}
                        touch={touched.clientEn}
                     />

                     <ClientFaInput
                        value={values.clientFa}
                        setFieldValue={setFieldValue}
                        error={errors.clientFa}
                        touch={touched.clientFa}
                     />

                     <DescriptionEnInput
                        value={values.descriptionEn}
                        setFieldValue={setFieldValue}
                        error={errors.descriptionEn}
                        touch={touched.descriptionEn}
                     />

                     <DescriptionFaInput
                        value={values.descriptionFa}
                        setFieldValue={setFieldValue}
                        error={errors.descriptionFa}
                        touch={touched.descriptionFa}
                     />

                     <div className='flex items-center gap-5'>
                        <span className='verdana text-slate-400'>Project Active</span>

                        <Switch
                           checked={values.active}
                           name='active'
                           color='success'
                           onChange={() => setFieldValue('active', !values.active)}
                        />
                     </div>

                     <button
                        type='submit'
                        disabled={isSubmitting}
                        className='w-full rounded-lg border-2 border-green-600 py-2 text-base hover:shadow-md hover:shadow-green-600/40'
                     >
                        {isSubmitting ? (
                           <svg
                              className='mx-auto h-6 w-6 animate-spin text-green-600'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              strokeWidth='2'
                              stroke='currentColor'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                           >
                              {' '}
                              <path stroke='none' d='M0 0h24v24H0z' />{' '}
                              <path d='M9.828 9.172a4 4 0 1 0 0 5.656 a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828 a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828' />
                           </svg>
                        ) : (
                           'Save'
                        )}
                     </button>

                     {addingNewproject ? (
                        ''
                     ) : (
                        <button
                           type='button'
                           disabled={isSubmitting}
                           onClick={handleDeleteproject}
                           className='w-full rounded-lg border-2 border-rose-300 py-2 text-base hover:shadow-md hover:shadow-rose-300/40'
                        >
                           {isSubmitting ? (
                              <svg
                                 className='mx-auto h-6 w-6 animate-spin text-rose-300'
                                 width='24'
                                 height='24'
                                 viewBox='0 0 24 24'
                                 strokeWidth='2'
                                 stroke='currentColor'
                                 fill='none'
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                              >
                                 {' '}
                                 <path stroke='none' d='M0 0h24v24H0z' />{' '}
                                 <path d='M9.828 9.172a4 4 0 1 0 0 5.656 a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828 a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828' />
                              </svg>
                           ) : (
                              'Delete'
                           )}
                        </button>
                     )}
                  </div>
               </Form>
            )}
         </Formik>
      )
   },
)

DetailForm.displayName = 'DetailForm'

export default DetailForm
