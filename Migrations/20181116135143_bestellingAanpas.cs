using Microsoft.EntityFrameworkCore.Migrations;

namespace kamerplantModel.Migrations
{
    public partial class bestellingAanpas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "adres",
                table: "klant");

            migrationBuilder.DropColumn(
                name: "adres",
                table: "geregistreerdeklant");

            migrationBuilder.AddColumn<string>(
                name: "adres",
                table: "bestelling",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "adres",
                table: "bestelling");

            migrationBuilder.AddColumn<string>(
                name: "adres",
                table: "klant",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "adres",
                table: "geregistreerdeklant",
                nullable: true);
        }
    }
}
