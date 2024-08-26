import { Router } from 'express'

import * as db from '../db/todos.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const todos = await db.getAllToDos()
    console.log(todos)
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Shrek has nothing to do' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.updateToDos(id)
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Shrek still has nothing to do' })
  }
})

export default router
