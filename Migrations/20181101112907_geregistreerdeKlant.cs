using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace kamerplantModel.Migrations
{
    public partial class geregistreerdeKlant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_verlanglijstitem_klant_geregistreerdeklantID",
                table: "verlanglijstitem");

            migrationBuilder.DropColumn(
                name: "email",
                table: "klant");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "klant");

            migrationBuilder.CreateTable(
                name: "geregistreerdeklant",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_geregistreerdeklant", x => x.ID);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_verlanglijstitem_geregistreerdeklant_geregistreerdeklantID",
                table: "verlanglijstitem",
                column: "geregistreerdeklantID",
                principalTable: "geregistreerdeklant",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_verlanglijstitem_geregistreerdeklant_geregistreerdeklantID",
                table: "verlanglijstitem");

            migrationBuilder.DropTable(
                name: "geregistreerdeklant");

            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "klant",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "klant",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_verlanglijstitem_klant_geregistreerdeklantID",
                table: "verlanglijstitem",
                column: "geregistreerdeklantID",
                principalTable: "klant",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
