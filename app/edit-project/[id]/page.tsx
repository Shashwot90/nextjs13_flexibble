import { redirect } from 'next/navigation'
import Modal from '@/components/Modal'
import ProjectForm from '@/components/ProjectForm'
import { getCurrentUser } from '@/lib/session'
import React from 'react'

const EditProject = async () => {
    const session = await getCurrentUser();

    if(!session?.user) redirect('/')

  return (
    <Modal>
        <h3 className="modal-head-text">Edit Project</h3>
        <ProjectForm type="edit" session={session} />
    </Modal>
  )
}

export default EditProject