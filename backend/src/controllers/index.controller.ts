import {Handler, Request, Response} from 'express'
class IndexController {

    public index: Handler = (req: Request, res: Response): Response => {
        try{
            return res.status(200).json({
                succes: true,
                message: 'Hello my friend, this is my index of my API REST'
            })
        }
        catch(e){
            return res.status(500).json({
                succes: false,
                message: 'Internal server ERROR, try later'
            })
        }
    }
}

export default IndexController