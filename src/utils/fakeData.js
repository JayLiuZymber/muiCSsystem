
class FakeData {
    // Mobile Name Type Region2 Created
    static createData(mobile, name, type, region2, created) {
        return { mobile, name, type, region2, created };
    }
}

class Client {
    // Mobile Status
    static createData(mobile, status) {
        return { mobile, status };
    }
}

class Status {
    // Status Update
    static createData(status, update) {
        return { status, update };
    }
}

class ClientRank {
    // # Post ID Mobile
    static createData(hashtag, postid, mobile) {
    return { hashtag, postid, mobile };
}
}

export {FakeData,Client,Status,ClientRank}