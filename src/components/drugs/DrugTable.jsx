import { memo } from 'react'
import Table from '../content/Table.jsx'
import DrugName from './DrugName.jsx'

function DrugTable({ drugs }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Fármaco</th>
          <th>Dosis orientativa (adulto)</th>
          <th>Uso principal</th>
          <th>Precaución</th>
        </tr>
      </thead>
      <tbody>
        {drugs.map((d) => (
          <tr key={d.id} id={`med-${d.id}`}>
            <td>
              <DrugName id={d.id} />
            </td>
            <td>{d.dose}</td>
            <td>{d.use}</td>
            <td>{d.caution}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default memo(DrugTable)
