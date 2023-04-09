import React, { useState } from 'react';

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('/public', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log(response);
        console.log('File uploaded successfully');
      })
      .catch((error) => {
        console.error(error);
        console.error('Failed to upload file');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" onChange={handleFileInput} />
      <button type="submit">Submit</button>
    </form>
  );
}
