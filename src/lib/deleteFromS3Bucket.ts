import { toast } from 'react-toastify'

const deleteFromS3Bucket = async (imageKey: string, folder: string) => {
   try {
      const res = await fetch('/api/--admin--/image/s3', {
         method: 'DELETE',
         body: JSON.stringify({
            folder,
            imageKey,
         }),
      })

      if (!res.ok) throw new Error()

      return res
   } catch (err) {
      toast.error('در حذف عکس خطایی رخ داد. لطفا مجدد تلاش کنید.')
      return console.error(err)
   }
}

export default deleteFromS3Bucket
