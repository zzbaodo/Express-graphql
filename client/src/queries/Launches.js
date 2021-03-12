import { gql, useQuery } from "@apollo/client"
import LaunchItem from "../components/LaunchItem"

export const GET_LAUNCHES = gql`
  query Launches {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`
const Launches = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES)
  if (loading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  console.log(data)
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <div className="my-3">
        <p>
          <span className="px-3 mr-2 bg-success" /> = Success
        </p>
        <p>
          <span className="px-3 mr-2 bg-danger" /> = Failed
        </p>
      </div>
      {data.launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </>
  )
}

export default Launches
