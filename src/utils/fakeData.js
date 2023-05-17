// -----------------------------------------------------------------------------
// home
class AssignedClient {
    // Mobile Name Type Region2 Created
    static createData(mobile, name, type, region2, created) {
        return {
            mobile  ,
            name    ,
            type    ,
            region2 ,
            created ,
        };
    }
}

class ClientStatus {
    // Mobile Status
    static createData(mobile, status) {
        return { mobile, status };
    }
}

class ClientFlower {
    // # Mobile Name Flower
    static createData(hashtag, mobile, name, flower) {
        return { hashtag, mobile, name, flower };
    }
}

class ClientRank {
    // # Post ID Mobile
    static createData(hashtag, postid, mobile) {
        return { hashtag, postid, mobile };
    }
}

// -----------------------------------------------------------------------------
// client
class Status {
    // Status Update
    static createData(status, update) {
        return { status, update };
    }
}

class ComplainRecord {
    static createData(complain, status, remark, description, created, modified) {
        return { 
            complain   ,
            status     ,
            remark     ,
            description,
            created    ,
            modified   ,
        };
    }
}
 

export { AssignedClient, ClientStatus, ClientFlower, ClientRank, Status, ComplainRecord }