import axios from 'axios'

const Homepage = ({ courses }) => {
  return (
    <div>
      <h1>Courses</h1>
      <pre>
        {JSON.stringify(courses, null, 2)}
      </pre>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/get-courses')

  return {
    props: {
      courses: data,
    },
  }
}

export default Homepage