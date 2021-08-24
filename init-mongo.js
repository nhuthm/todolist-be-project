db.createUser(
    {
        user : "nhuthuynh",
        pwd  : "nrj8kueb",
        roles: [
            {
                role : "readWrite",
                db   : "todolist-project"
            }
        ] 
    }
)