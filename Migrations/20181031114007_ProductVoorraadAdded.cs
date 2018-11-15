using Microsoft.EntityFrameworkCore.Migrations;

namespace kamerplantModel.Migrations
{
    public partial class ProductVoorraadAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "voorraad",
                table: "product",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "voorraad",
                table: "product");
        }
    }
}
