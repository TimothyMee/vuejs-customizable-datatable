# vue-customizable-datatable

> A flexible and customizable datatable VueJS component

## Demo

https://vue-customizable-datatable.netlify.app/

## Requirements

- VueJS

## Installation

```bash
npm i vue-customizable-datatable --save
```

## Usage

Include the component,

```javascript
import DataTable from "vue-customizable-datatable";
```

Then, register the component, however you like:

```javascript
{
    ...
    components: {
        ...
        DataTable
    }
}
```

And then.. use the component:

```xml
<data-table></data-table>
```

Of course, code above will render garbage. Here are the props it accepts to render some sensible data:

<table>
  <tr>
    <th>
      Prop name
    </th>
    <th>
      Description
    </th>
    <th>
      Example
    </th>
  </tr>
  <tr>
    <td>
      <code>title</code>
    </td>
    <td>
      The title of the datatable
    </td>
    <td>
      <pre>
"Basic Table"
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>columns</code>
    </td>
    <td>
      Columns
    </td>
    <td>
      <pre>
        <code>
[ // Array of objects 
  {    
    label: "Name", // Column name
    field: "name", // Field name from row
    numeric: false,// Affects sorting
    html: false    // Escapes output if false.
  } 
];
        </code>  
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>rows</code>
    </td>
    <td>
      Rows
    </td>
    <td>
      <pre>
        <code>
[ // Array of objects 
  {    //check demo for examples
    name: 'Timothy',
    ...
  } 
];
        </code>  
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>perPage</code>
    </td>
    <td>
      Numbers of rows per page (pagination)
    </td>
    <td>
      <pre>
[10, 20, 30, 40, 50] (default)
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>defaultPerPage</code>
    </td>
    <td>
      Default rows per page
    </td>
    <td>
      <pre>
10 (default) // Default row per page
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>initSortCol</code>
    </td>
    <td>
      Default column for sorting on component initialization
    </td>
    <td>
      <pre>
-1 (default) // By default table is not sorted by any column
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>row-click</code>
    </td>
    <td>
      Function to execute on click. // Check 'Clickable Table' in demo for more details
    </td>
    <td>
      <pre>
alert('hey') // Function, row 1st param
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>clickable</code>
    </td>
    <td>
      Clickable rows. Will fire row-click event
    </td>
    <td>
      <pre>
true (default) // Row is passed in the event payload
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>sortable</code>
    </td>
    <td>
      Cause column-click to sort
    </td>
    <td>
      <pre>
true (default) // Whether sortable
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>searchable</code>
    </td>
    <td>
      Add fuzzy search functionality
    </td>
    <td>
      <pre>
true (default) // Whether searchable
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>exactSearch</code>
    </td>
    <td>
      Disable fuzzy search
    </td>
    <td>
      <pre>
true (default) // Whether only exact matches are returned
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>paginate</code>
    </td>
    <td>
      Add footer next/prev. buttons
    </td>
    <td>
      <pre>
true (default) // Whether paginated
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>exportToExcel</code>
    </td>
    <td>
      Add button to export to Excel
    </td>
    <td>
      <pre>
true (default)
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>printable</code>
    </td>
    <td>
      Add printing functionality
    </td>
    <td>
      <pre>
true (default)
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>customButtons</code>
    </td>
    <td>
      Custom buttons
    </td>
    <td>
      <pre>
        <code>
// Array of objects
[
  { 
    hide: false, // Whether to hide the button
    icon: "search", // Materialize icon 
    onclick: aFunc() // Click handler 
  } 
];
        </code>
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>parentDivClasses</code>
    </td>
    <td>
      Add classes for table parent div
    </td>
    <td>
      <pre>
'table-responsive' (default)
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>tableClasses</code>
    </td>
    <td>
      Add classes for table
    </td>
    <td>
      <pre>
'table table-bordered' (default)
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>enableCheckbox</code>
    </td>
    <td>
      Enable checkbox for selection
    </td>
    <td>
      <pre>
false (default)
      </pre>
    </td>
  </tr>
  <tr>
    <td>
      <code>checkboxValueField</code>
    </td>
    <td>
      Field value to return once checkbox is checked // Check 'Select Table' in demo.
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>
      <code>checked-boxes</code>
    </td>
    <td>
      Function to execute on check of checkbox. // Check 'Select Table' in demo for more details
    </td>
    <td>
      <pre>
      </pre>
    </td>
  </tr>
</table>

### Adding buttons to Rows

```HTML
<datatable title="People" ...>
  <th slot="thead-tr">
    Actions
  </th>
  <template slot='tbody-tr'>
        <td>
            <button
            class='btn btn-default'
            >
            Edit
            </button>

            <button
            class='btn btn-danger'
            >
            Delete
            </button>
            <button
            class='btn btn-info'
            >
            View Holdings
            </button>
        </td>
    </template>
</datatable>
```
