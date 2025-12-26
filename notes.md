# Sending get and post Request

- to check servere start or not

```bash

http://localhost:3000/

```

- to check whether the requested url correct or not

```bash

http://localhost:3000/api/check

```

- postman work

- Headers:

  Content-Type: application/json

  Body → raw → JSON

  ```json
  {
    "url": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
  }
  ```

- Expected Response (Image)

      - if link is valid
      ```json
      {
      "success": true,
      "type": "image",
      "contentType": "image/jpeg"
      }

      ```
      
      - Link not valid

      ```json

        {
        "success": false,
        "message": "Server error"
        }
  ```
