using Microsoft.EntityFrameworkCore.Migrations;

namespace kamerplantModel.Migrations
{
    public partial class aanpassing : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "url",
                table: "product");

            migrationBuilder.AddColumn<bool>(
                name: "admin",
                table: "geregistreerdeklant",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "admin",
                table: "geregistreerdeklant");

            migrationBuilder.AddColumn<string>(
                name: "url",
                table: "product",
                nullable: true);
        }
    }
}
