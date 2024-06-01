
### 2. Products Catalog

**Template Name: Products Catalog**

**Description:**
A template to list all the products available, with descriptions and prices.

**Content:**

```markdown
# Our Products
Here is a list of our digital invitation products:

| Product                             | Description | Price  |
|-------------------------------------|-------------|--------|
| **Save the Date Card**              | Beautiful save-the-date cards | $3 per copy |
| **Wedding Invitation Card**         | Elegant wedding invitation cards | $3 per copy |
| **RSVP Card**                       | RSVP cards for your guests | $3 per copy |
| **Engagement Party Invitation Card**| Invitations for engagement parties | $3 per copy |
| **Wedding Anniversary Card**        | Anniversary celebration cards | $3 per copy |
| **Wedding Package**                 | Complete wedding package (excludes Anniversary Card) | $7 per copy |
| **Special Package**                 | Special occasion package (excludes Wedding Invite Card) | $7 per copy |

---

Use the following HTML to style it with colors from Louis Vuitton:

```html
<section id="products" class="py-12 bg-beige text-brown">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-gold mb-8">Our Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-beige p-6 rounded shadow-md">
                <h3 class="text-2xl font-bold text-brown mb-4">Save the Date Card</h3>
                <p class="mb-4 text-brown">$3 per copy</p>
            </div>
            <div class="bg-beige p-6 rounded shadow-md">
                <h3 class="text-2xl font-bold text-brown mb-4">Wedding Invitation Card</h3>
                <p class="mb-4 text-brown">$3 per copy</p>
            </div>
            <div class="bg-beige p-6 rounded shadow-md">
                <h3 class="text-2xl font-bold text-brown mb-4">RSVP Card</h3>
                <p class="mb-4 text-brown">$3 per copy</p>
            </div>
            <div class="bg-beige p-6 rounded shadow-md">
                <h3 class="text-2xl font-bold text-brown mb-4">Engagement Party Invitation Card</h3>
                <p class="mb-4 text-brown">$3 per copy</p>
            </div>
            <div class="bg-beige p-6 rounded shadow-md">
                <h3 class="text-2xl font-bold text-brown mb-4">Wedding Anniversary Card</h3>
                <p class="mb-4 text-brown">$3 per copy</p>
            </div>
            <div class="bg-beige p-6 rounded shadow-md">
                <h3 class="text-2xl font-bold text-brown mb-4">Wedding Package</h3>
                <p class="mb-4 text-brown">$7 per copy (excludes Anniversary Card)</p>
            </div>
            <div class="bg-beige p-6 rounded shadow-md">
                <h3 class="text-2xl font-bold text-brown mb-4">Special Package</h3>
                <p class="mb-4 text-brown">$7 per copy (excludes Wedding Invite Card)</p>
            </div>
        </div>
    </div>
</section>
