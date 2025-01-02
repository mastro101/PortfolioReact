function Message() {
    const rudeFace = '>:('
    if (rudeFace)
        return <h1>{rudeFace}</h1>;
    else
        return <h1>rude</h1>;
}

export default Message;