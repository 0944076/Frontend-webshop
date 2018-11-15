using Microsoft.EntityFrameworkCore.Migrations;

namespace kamerplantModel.Migrations
{
    public partial class geregistreerdeKlantIDBijBestelling : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "geregistreerdeklantID",
                table: "bestelling",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "geregistreerdeklantID",
                table: "bestelling");
        }
    }
}
