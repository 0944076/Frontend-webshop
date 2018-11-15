using Microsoft.EntityFrameworkCore.Migrations;

namespace kamerplantModel.Migrations
{
    public partial class datumEnVerkoopprijsBijBestellingen : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "verkoopPrijs",
                table: "bestellingproduct",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "datum",
                table: "bestelling",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "verkoopPrijs",
                table: "bestellingproduct");

            migrationBuilder.DropColumn(
                name: "datum",
                table: "bestelling");
        }
    }
}
