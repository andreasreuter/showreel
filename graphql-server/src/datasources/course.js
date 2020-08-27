"use strict"

import DynamoDBDataSource from "./apollo-dynamodb"

class CoursesAPI extends DynamoDBDataSource {
  constructor() {
    super()
  }

  async course(courseId) {
    const data = await this.retrieve({
      "ExpressionAttributeNames": {
        "#course_id": "course_id"
      },
      "ExpressionAttributeValues": {
        ":course_id": {
          "S": courseId
        }
      },
      "ConsistentRead": false,
      "FilterExpression": "#course_id = :course_id",
      "TableName": "courses"
    })

    return (data.Items)
  }

  async allCourses() {
    const data = await this.retrieve({
      "TableName": "courses"
    })

    return (data.Items)
  }
}

export default CoursesAPI
