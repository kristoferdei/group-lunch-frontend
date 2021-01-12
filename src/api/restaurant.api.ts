import { RestaurantDto } from './dto/restaurant.dto'
import { UpdateRestaurantDto } from './dto/update-restaurant.dto'

export class RestaurantApi {
  public static async getAll(): Promise<RestaurantDto[]> {
    const resp = await fetch('http://localhost:4000/restaurants/', {
      method: 'GET',
      headers: { 'Access-Control-Allow-Origin': '*' },
    })

    return await resp.json()
  }

  public static async updateOne(restaurantId: number, updateRequest: UpdateRestaurantDto): Promise<any> {
    const resp = await fetch(`http://localhost:4000/restaurants/${restaurantId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateRequest),
    })

    return await resp.json()
  }
}
