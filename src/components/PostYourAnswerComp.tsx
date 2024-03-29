"use client"
import React, { useRef } from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import { Card, CardContent } from '../components/ui/card'
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '../components/ui/button'
import { Plus } from 'lucide-react'
interface Props {}

const PostYourAnswerComp = () => {

    const editorRef = useRef<any>(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };

  return (
    <div>
         <Label className="mb-1 text-2xl" htmlFor='body'>Post Your Answer</Label>   
         <Editor
            apiKey='7t3m9mltz12yax7o7t327uq08l27cifwtnk8bbfxw0t4iqi8'
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
            height: 500,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
        />
        <div className='mt-7'>
            <Label className='text-2xl'>Tags</Label>
            <div className='flex space-x-4'>
             <Input id="tag" placeholder="eg Python,Javascript,SQL etc..." />
             <Button className='bg-slate-300 text-black hover:text-white'><Plus className='w-4 h-4'/> Add</Button>
            </div>
            <div className="bg-gray-200 mt-2 w-auto h-auto rounded-md p-2 inline-block m-1">
              <span className="text-gray-700 h-6 w-200"><strong>Python</strong></span>
            </div>
            <div className="bg-gray-200 mt-2 w-auto h-auto rounded-md p-2 inline-block m-1">
              <span className="text-gray-700 h-6 w-200"><strong>Javascript</strong></span>
            </div>
            <div className="bg-gray-200 mt-2 w-auto h-auto rounded-md p-2 inline-block m-1">
              <span className="text-gray-700 h-6 w-200"><strong>SQL</strong></span>
            </div>
        </div>
        <div className='mt-5 mb-5 flex justify-center'>
         <Button size="lg" className='text-2xl text-black bg-slate-300 w-[300px] hover:text-white'>Submit</Button>
        </div>
        </div>
  )
}

export default PostYourAnswerComp