# contact-management-system


## Sample GraphQL Queries and Mutations


<table width="100%" style="width: 100%">
    <tbody>
        <tr valign="top">
            <td width="50%" style="width: 50%">
                <p>Query - Get</p>
                <pre>
query{
  getContacts {
    id
    firstName
    lastName
    email
    company
    phone
  }
}
                </pre>
            </td>
            <td width="50%" style="width: 50%">
                <p>Response</p>
                <pre>
{
  "data": {
    "getContacts": [
      {
        "id": "1",
        "firstName": "Hitesh",
        "lastName": "Sharma",
        "email": "hitesh@gmail.com",
        "company": "ind",
        "phone": 76
      },
      {
        "id": "2",
        "firstName": "pulkit",
        "lastName": "Sharma",
        "email": "pulkit@gmail.com",
        "company": "ind",
        "phone": 77
      },
    ]
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Query - Get by Param</p>
                <pre>
query{
  getContact(id: "1") {
    id
    firstName
    lastName
    email
    company
    phone
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  data: {
          "id": "1",
          "firstName": "Hitesh",
          "lastName": "Sharma",
          "email": hitesh@gmail.com",
          "company": "ind",
          "phone": 76
        }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Create</p>
                <pre>
mutation{
  createContact(input: {
  firstName: "Hitesh",
  lastName: "Sharma",
  email: "hitesh@gmail.com",
  company:"ind",
  phone: 76,
  }) {
    id
    firstName
    lastName
    company
    email
    phone
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "createContact": {
      "id": "5fc4991ce8bb993cbe62e28e",
      "firstName": "Hitesh",
      "lastName": "Sharma",
      "company": "ind",
      "email": "hitesh@gmail.com",
      "phone": 76
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
<tr valign="top">
            <td>
                <p>Mutation - Update</p>
                <pre>
mutation{
  updateContact(input: {
  id: "2",
  irstName: "Hitesh",
  lastName: "Sharma",
  email: "hitesh@gmail.com",
  company:"ind",
  phone: 76,
  }) {
    id
    firstName
    lastName
    company
    email
    phone
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "updateContact": {
      "id": "2",
      "firstName": "Hitesh",
      "lastName": "Sharma",
      "company": "ind",
      "email": "hitesh@gmail.com",
      "phone": 76
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Delete</p>
                <pre>
mutation{
  deleteContact(id: "1")
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "deleteContact": "Contact Deleted"
  }
}
                </pre>
            </td>
        </tr>
    </tbody>
</table>
