import Link from 'next/link'
import ImageDelete from './imageDelete'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { memo } from 'react'
const Button = dynamic(() => import('@mui/material/Button'), { ssr: false })

const GalleryInput = memo(
   ({
      project: { gallery, _id },
      galleryPrevMemo,
      dragOverHandler,
      dropHandlerDesign,
      onFileSelected,
      loading,
   }: {
      project: {
         gallery: string[]
         _id: string
      }
      galleryPrevMemo: File[] | null
      dragOverHandler: (event: React.DragEvent<HTMLDivElement>) => void
      dropHandlerDesign: (event: React.DragEvent<HTMLDivElement>, type: string) => void
      onFileSelected: (files: FileList | null, type: string) => void
      loading: boolean
   }) => {
      return (
         <>
            <div>
               {gallery.length ? (
                  <span className='verdana text-slate-400'>Gallery Images</span>
               ) : (
                  ''
               )}
               {gallery.map((image: string, idx: number) => {
                  return (
                     <div key={idx} className='relative'>
                        <Link
                           target='_blank'
                           href={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${image}`}
                        >
                           <div className='mx-auto flex justify-center'>
                              <Image
                                 className='rounded-lg p-1'
                                 src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${image}`}
                                 alt={_id}
                                 width={900}
                                 height={600}
                                 loading='lazy'
                              />
                           </div>
                        </Link>

                        <ImageDelete type='gallery' project={_id} imageKey={image} />
                     </div>
                  )
               })}
            </div>

            {galleryPrevMemo?.length ? (
               <div>
                  <span className='verdana text-slate-400'>Gallery Images (Preview)</span>
                  <div className='space-y-3'>
                     {galleryPrevMemo.map((imageData: File) => {
                        return (
                           <Image
                              key={imageData.name}
                              className='rounded-xl object-contain'
                              src={URL.createObjectURL(imageData)}
                              alt={imageData.name}
                              width='250'
                              height='250'
                              quality={100}
                              loading='lazy'
                           />
                        )
                     })}
                  </div>
               </div>
            ) : (
               ''
            )}

            <div
               onDrop={(e) => dropHandlerDesign(e, 'gallery')}
               onDragOver={dragOverHandler}
               className='w-full rounded-lg border-2 border-slate-600 bg-slate-800 text-sm'
            >
               {/* @ts-ignore */}
               <Button type='button' component='label' sx={{ width: '100%', padding: '.5rem' }}>
                  <span className='verdana text-sm'>Choose Gallery Image/s</span>
                  <input
                     hidden
                     accept='image/*'
                     type='file'
                     name='galleryPreview'
                     multiple
                     onChange={(e) => onFileSelected(e?.target?.files, 'gallery')}
                     disabled={loading}
                  />
               </Button>
            </div>
         </>
      )
   },
)

GalleryInput.displayName = 'GalleryInput'

export default GalleryInput
