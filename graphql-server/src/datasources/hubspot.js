"use strict"

import { RESTDataSource } from "apollo-datasource-rest"

class HubSpotAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://api.hubapi.com/"
  }

  willSendRequest(request) {
    request.params.set("hapikey", this.context.hubSpotAPIKey)
  }

  async addArtLover({ email }) {
    const result = await this.addContact([{
      "property": "email",
      "value": email
    }])

    return (result)
  }

  async addArtist({ firstName, lastName, email, website, categoryOfArt, instagramHandle }) {
    const result = await this.addContact([
      {
        "property": "firstname",
        "value": firstName
      },
      {
        "property": "lastname",
        "value": lastName
      },
      {
        "property": "email",
        "value": email
      },
      {
        "property": "website",
        "value": website
      },
      {
        "property": "category_of_art",
        "value": categoryOfArt
      },
      {
        "property": "instagram_handle",
        "value": instagramHandle
      }
    ])

    return (result)
  }

  async addContact(props) {
    return this.post(
      "contacts/v1/contact/",
      {
        "properties": props
      }
    )
  }
}

export default HubSpotAPI
