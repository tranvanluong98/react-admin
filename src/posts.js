// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const ListGuesser = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            {/* <TextField source="name" /> */}
            {/* <TextField source="username" /> */}
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            {/* <TextField source="website" /> */}
            <TextField source="company.name" />
        </Datagrid>

        
    </List>
);

// // add rowClick

// // in src/posts.js
// import React from 'react';
// import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
// import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

// export const PostList = props => (
 
//     <List {...props}>
//        <Datagrid rowClick="edit">
//        <Datagrid>
//           <TextField source="id" />
//             <ReferenceField source="userId" reference="users">
//                 <TextField source="name" />
//             </ReferenceField>
//           <TextField source="id" />
//             <TextField source="title" />
//            <TextField source="body" />
//          <EditButton />
//         </Datagrid>
//     </List>
   
// );
