# rioflorido-api-activity

### "Why did I choose to Embed the [Review/Tag/Log]?"

*Answer:*
I chose to embed these because they are small details that only make sense inside their parent hotel or room document. For example, a review belongs to a specific hotel stay, a tag might describe a room feature, and a log could track a guest’s activity during their booking. These pieces of information don’t need their own space in the database since they aren’t useful on their own. By embedding them, they stay tightly connected to the hotel or room record, making it simple to fetch everything together without extra queries.


### "Why did I choose to Reference the [Chef/User/Guest]?"

*Answer:*
I chose to reference these because guests and users are larger, independent entities that can exist outside of a single hotel or room record. A guest might book multiple rooms across different hotels, and a user account could be linked to many reviews or reservations. If I embedded them everywhere, I’d end up duplicating a lot of data and making updates difficult. By referencing them, I store their information once and simply point to it wherever needed. This avoids duplication and ensures that changes to a guest or user are reflected everywhere automatically.

### Hands-on Activity #4: Securing the API

### 1. Authentication vs Authorization:
What is the difference between Authentication and Authorization in our
code?
*Answer:*
Authentication confirms your identity to prove who you are, while authorization determines which specific files or actions you have permission to access.

### 2. Security (bcrypt):
Why did we use bcryptjs instead of saving passwords as plain text in
MongoDB?
*Answer:*
We use bcryptjs to turn passwords into unreadable "hashes" so that even if the database is hacked, the actual passwords remain hidden and protected.

### 3. JWT Structure:
What does the protect middleware do when it receives a JWT from the
client?
*Answer:*
The protect middleware checks the token's digital signature to ensure the user is logged in and then retrieves their ID to allow access to private data.