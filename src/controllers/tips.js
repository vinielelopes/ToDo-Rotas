import tips  from "../models/tips.js";
import { bdTips } from "../infra/bd.js";

export const Tips = (app) => {
    app.get('/tips', (req, res) => {
        const tip = bdTips[Math.floor(Math.random() * bdTips.length)]
        res.send(tip)
    })

    app.post('/create', (req, res) => {
        const { tip } = req.body
        const db = new tips(tip)

        bdTips.push(db)
        res.send(db)
    })

}