## Contact Manager
THis is a simple contact management app that allows users to view all contacts, add a new contact, edit an existing contact, and delete a contact. For my state management solution I chose to use the React Context API. The main goal of this project was to create a CRUD app using React Context API.

Please run 'npm install' to install dependencies, 'npm run build' to build the app, 'npm start' to run the app (http://localhost:3000 in the browser), and finally 'npm run server:start" to run the server (for the data).

## Component structure
Below is a high level view of how my components are laid out.

```
<App>
  <ContactProvider>
    <ContactList>
      <Buttons>
        <EditForm />
        <DeleteForm />
      </Buttons>
    </ContactList>
    <AddContact />
  </ContactProvider>
</App>
```
