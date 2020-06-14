/**
 * Format the Cloudant documents to be consumed by the user interface
 */
const md5 = require('spark-md5');

function main(params) {
  // params contain the "rows" coming from Cloudant including the full documents

  return {
    entries: params.rows.map((row) => { 
      // console.log(row.dic._id);
      return {
      
      camera_id: row.doc.camera_id,
	    datetime: row.doc.datetime,
      location: row.doc.location,
      id:row.doc.id,
	    // createdAt: row.doc.createdAt,
	    imag: row.doc.image_url
    }})
	};
}
