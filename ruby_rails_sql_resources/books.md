# Books_app

- Create a rails app called `books_app`
- Create a books controller
- Populate it with the following...
```
class BooksController < ApplicationController

	def index
		# Fake DB ORM call
		puts "============="
		@all_books = $BOOKS
		p @all_books
		puts "============="
	end

	def show
		# Get the id via params
		id = params[:id].to_i
		puts "============="
		puts id
		puts id.class
		puts "============="

		@book = {}
		$BOOKS.each do |book|
			if book[:id] === id
				@book = book
				puts "============="
				puts "book found"
				puts "============="
			end
		end

		# Remember, just putting the final variable makes it implicitly return
		@book

		# More statements to test
		puts "================"
		p @book
		puts "================"
	end

	def new
		@book = Book.new
	end

	def create
		name = book_params[:title]
		nickname = book_params[:author]
		new_id = $BOOKS.length + 1

		$BOOKS << { id: new_id, title: title, author: author}

		redirect_to :root
	end

	def edit
		id = params[:id].to_i
		puts "============="
		puts id
		puts id.class
		puts "============="

		find_book = {}
		$BOOKS.each do |book|
			if book[:id] === id
				find_book = book
				puts "============="
				puts "book found"
				puts "============="
			end
		end

		@book_teacher = Book.new(find_book)

		@book = @existing_book
	end

	def update
		id = params[:id].to_i
		new_title = book_params[:title]
		new_author = book_params[:author]

		$BOOKS.each do |book|
			if book[:id] == id
				book[:title] = new_title
				book[:authoer] = new_author
			end
		end

		redirect_to :root
	end

	def destroy
		id = params[:id].to_i
		$BOOKS.each do |book|
			if book[:id] == id
				$BOOKS.delete(book)
			end
		end

		redirect_to :root
	end


	private

	def book_params
		params.require(:book).permit(:title, :author)
	end

end
```
- Add dummy book data. Inside configs->initializers
	- create `books.rb`
	- populate it with the following...
	```
	$BOOKS = [
		{
			id: 1,
			title: "The Book of Awesomesauce",
			author: "Joe"
		},
		{
			id: 2,
			title: "The Book of coolness",
			author: "Matt",
		},
		{
			id: 3,
			title: "Death is yummy",
			author: "Thom"
		}
	]
	```
- Create your routes using resources on books.
- Create a tableless model so that we can use dummy data
	- Inside app/models
	- create `books.rb`
	- populate it with the following...
	```
	class Book
		include ActiveModel::Model

		attr_accessor :title, :author, :id
		validates :title, :author, presence: true
	end
	```
- Build out views
	- Create a folder for books
	- Create the corresponding html.erb files for the following
		- index.html.erb
		- edit.html.erb
		- new.html.erb
		- show.html.erb
		- _form.html.erb
- Create links using the link_for helper to attach the user's experience to navigate the show and delete actions off the index page.
	- Be sure to play with the path prefixing off the rake routes. 
- Create a link to show for each book off the index page.
- Use the following to create the _form.html.erb
```
<%= form_for @book do |form| %>
	Name: <%= form.text_field :title %><br>
	Nickname: <%= form.text_field :author %><br>
	<%= form.submit %>
<% end %>
```
- Use the `_form.html.erb` partial for the edit.html.erb and the new.html.erb
- Note that the edit form will continue to add a new instance of book, don't worry about this bug.


#### Rely on the various notes from today and the reference code as well as start looking up rails documentation and SO's.