'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with blogs
 */
const Blog = use('App/Models/Blog')
class BlogController {
 
  
  async getAllBlogPosts ({ request, response }) {
    // let data = request.all()
      return await Blog.query().orderBy('id', 'desc').fetch()
  }
  async getAllBlogPostsFirst ({ request, response }) {
    // let data = request.all()
      return await Blog.query().orderBy('id', 'desc').first()
  }
  async getAllBlogPostsTwo ({ request, response }) {
    // let data = request.all()
      return await Blog.query().orderBy('id', 'desc').limit(2).fetch()
  }
  async getBlogPostsById ({ request, response,params }) {
    let data = await Blog.query().where('id',params.id).first()
    if(data){
      return data
    }
    else {
      data = []
      return data
    }
  }

  /**
   * Display a single blog.
   * GET blogs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing blog.
   * GET blogs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update blog details.
   * PUT or PATCH blogs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a blog with id.
   * DELETE blogs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BlogController
