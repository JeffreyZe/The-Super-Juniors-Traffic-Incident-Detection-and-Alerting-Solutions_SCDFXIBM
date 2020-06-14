/**
 * Prepare the guestbook entry to be persisted
 */
function main(params) {
  if (!params.name || !params.comment) {
    return Promise.reject({error: 'no name or comment'});
  }

	return {
    doc: {
      createdAt: new Date(),
	    camera_id: params.camera_id,
	    location: params.location,
	    datetime: params.datetime,
	  }
  };
}
